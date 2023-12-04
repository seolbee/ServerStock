FROM node:current-alpine
# RUN apk --no-cache add python3 && cp /usr/share/zoneinfo/Asia/Seoul /etc/localtime
RUN mkdir -p /usr/src/ServerStock
COPY . /usr/src/ServerStock
WORKDIR /usr/src/ServerStock

RUN npm install
ENTRYPOINT ["npm", "run", "server"]