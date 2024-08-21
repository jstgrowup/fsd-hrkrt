`https://quickest-juniper-f9c.notion.site/Week-12-6-e4a8f5a33d4149dd88145c199497cefa`
`https://www.prisma.io/docs/orm/prisma-client/deployment/edge/deploy-to-cloudflare`

1. `npm create cloudflare@latest`
2. `npm i --save-dev prisma`
3. `npx prisma init`
4. `npx prisma migrate dev --name connection pooling`
5. `https://console.prisma.io/cm03xhwhs0f803gzigzahqatc/overview` (creating the connection pool)
6. `https://console.prisma.io/cm03xhwhs0f803gzigzahqatc/cm03xk4pc0f833gzi7mb5bqns/cm03xk4pc0f843gzix102qyn3/accelerate/setup` (get the api key and put it in the wrangler.toml file )
7. put the diurect url for the migrations as well
8. `npx prisma generate --no-engine` for the accelerate of the prisma command
