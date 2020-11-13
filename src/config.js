const config = {
  s3: {
    REGION: "eu-west-2",
    BUCKET: "notes.me",
  },
  apiGateway: {
    REGION: "eu-west-2",
    URL: "https://4i58u83qqb.execute-api.eu-west-2.amazonaws.com/prod",
  },
  cognito: {
    REGION: "eu-west-2",
    USER_POOL_ID: "eu-west-2_8fyfyhjTw",
    APP_CLIENT_ID: "2o3h5rs48b6bne23uc8hg7h856",
    IDENTITY_POOL_ID: "eu-west-2:f01b0365-6f53-4dce-b303-66f0b3fdb3ed",
  },
  STRIPE_KEY:
    "pk_test_51GCRmGC5ms5QLqs0FUgFZUfJuvkmIpzZqlxy4a6Nf72M6naHfj6hioPawlPRJjp6yWghhPiGfyIrNXRWgKyLSb3y00vKu956IC",
};

export default config;
