## Realtime with grpc and react

Install

Run grpc server:

```
go run server.go
```

Run Envoy proxy:

```
# Build image
docker build -t grpc-envoy:1.0 .

# Start envoy
docker run --network=host grpc-envoy:1.0
```

Run grpc client:

```
npm start
```
