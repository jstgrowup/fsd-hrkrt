after you start the instance it might work so install pm2
`npm install pm2@latest -g`
`pm2 start index.js --name server`
-> Make an instance ( public ip-address: 2.2.21.2 )
-> Deploy your application in your instance
-> DNS Service
-> 'A' @ - '1.1.1.1' ( Should be only one A record )
-> 'A' staging - '1.1.1.1'
-> nginx
-> caddy ->
jstgrowup.xyz {
reverse_proxe localhost:8080
}

staging.jstgrowup.xyz {
reverse_proxe localhost:9090
}
-> apache

<!-- below is there caddy configuration -->

api.a4k4.design {
reverse_proxy 3.108.55.50:9000
}
