#!/bin/bash

SERVICE_NAME="mpt_server"

read -r -d "" usage_message << EOM
Helper script to perform various dev Docker tasks.

USAGE:

  $0 COMMAND [OPTIONS] [ARGS]

COMMAND:

  console               - Start a Node.js console in a Docker container.

  build [TAG]           - Build Docker image. Takes an optional argument for image tag.

  release [TAG]         - Build Docker image and push to DockerHub. Takes an optional
                          argument for image tag.  DockerHub login and permission required.

  test [PATTERNS]       - Run tests in a Docker container.  May run a subset of tests with:
                            $0 test unit
                            $0 test test/models/*_test.js

  help                  - Print this help message.
EOM

function build {
  tag=${1:-latest}
  echo '*** Building Docker image plutino/$SERVICE_NAME:$tag'
  docker build -t plutino/$SERVICE_NAME:$tag --build-arg YARN_OPTS='--prod' .
}

cmd=$1
shift

case $cmd in
console)
  echo '*** Starting Node.js console'
  docker-compose run --entrypoint 'node' runner
  ;;

build)
  tag=${1:-latest}
  build $tag
  ;;

release)
  tag=${1:-latest}
  build $tag
  echo "*** Pushing image plutino/$SERVICE_NAME:$tag to DockerHub"
  docker push plutino/$SERVICE_NAME:$tag
  ;;

test)
  args=${1:-all}

  case $args in
  all)
    testfiles='test/**/*.test.js'
    ;;
  unit)
    testfiles='test/unit/**/*.test.js'
    ;;
  integration)
    testfiles='test/integration/**/*.test.js'
    ;;
  *)
    testfiles=$1
    ;;
  esac

  echo '*** Running tests'
  docker-compose run -e TEST=$testfiles -e NODE_ENV=test --rm --entrypoint 'yarn test' runner
  ;;

*)
  echo "$usage_message"
esac