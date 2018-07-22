FROM golang:1.10-alpine as build

RUN apk add --no-cache git
RUN go get -v github.com/cs3238-tsuzu/modoki-control-panel/server

WORKDIR /go/src/github.com/cs3238-tsuzu/modoki-control-panel/server

COPY . /go/src/github.com/cs3238-tsuzu/modoki-control-panel/server
RUN go get -v .
RUN CGO_ENABLED=0 go build -o /bin/cpserver

FROM scratch

COPY --from=build /bin/cpserver /bin/cpserver
COPY ./dist /dist
WORKDIR /
ENTRYPOINT ["/bin/cpserver"]
CMD ["--help"]
