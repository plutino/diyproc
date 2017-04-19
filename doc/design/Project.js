{
  Name: 'Raised bed garden',
  Description: 'Build a raised bed garden',
  Tags: [
    'gardening',
    'home',
    'outdoor'
  ],
  Settings: {
    Public: false,
    TaskOrder: 'StartedAt'
  },
  Owner: {
    ObjectID(User)
  },
  Collaborators: [
    ObjectID(User),
    ObjectID(User),
    ...
  ],
  Followers: [
    ObjectID(User),
    ObjectID(User),
    ...
  ],
  Tools: [
    {
      Name: 'Cordless drill',
      Image: 'image_url',
      QuantityPurchased: 0,
      QuantityRequired: 1,
      Price: 0,
      Comments: [
        {
          CreatedAt: Datetime,
          UpdatedAt: Datetime,
          User: ObjectID(User),
          Text: ''
        }
      ]
    }
  ],
  Materials: [
    {
      Name: '2x10x8ft',
      Image: 'image_url',
      QuantityPurchased: 2,
      QuantityRequired: 4,
      Price: 8.49,
      Comments: [
        {
          CreatedAt: Datetime,
          UpdatedAt: Datetime,
          User: ObjectID(User),
          Text: ''
        }
      ]
    }
  ],
  Tasks: [
    {
      Description: 'Buy wood',
      State: 'finished',
      StartedAt: Datetime,
      FinishedAt: Datetime,
      OrderToken: ''
      Images: [
        'image_url1',
        'image_url2',
        ...
      ],
      Video: [
        'video_url1',
        'video_url2',
        ...
      ]
    },
    {
      Description: 'Build frame',
      State: 'planned',
      StartedAt: Datetime,
      FinishedAt: Datetime,
      OrderToken:
      Images: [
        ...
      ],
      Video: [
        ...
      ]
    }
  ]
}