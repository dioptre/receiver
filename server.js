// Require the framework and instantiate it
const fastify = require('fastify')()
const R = require('ramda')
var fs = require('fs');
// Declare a route
fastify.get('/', async (request, reply) => {
	return new Promise(function(resolve, reject) {

  		fs.writeFile("/tmp/acceleration", `${R.defaultTo(0)(request.params.x)};${R.defaultTo(0)(request.params.y)};${R.defaultTo(0)(request.params.z)}`, function(err) {
	  if(err) reject(err)
	  else resolve({ c: true })
  })
	})
})

// Run the server!
const start = async () => {
  try {
    await fastify.listen(8000)
    fastify.log.info(`server listening on ${fastify.server.address().port}`)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()
