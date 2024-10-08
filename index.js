require('dotenv').config(); // add .env variables
var couchbase = require('couchbase'); // setup couchbase SDK

async function main() {
    const clusterConnStr = process.env.NODE_COUCHBASE_CONNECTION_STRING;
    const username = process.env.NODE_COUCHBASE_USERNAME;
    const password = process.env.NODE_COUCHBASE_PASSWORD;
    const bucketName = 'travel-sample'

    const cluster = await couchbase.connect(clusterConnStr, {
        username: username,
        password: password,
        // Sets a pre-configured profile called "wanDevelopment" to help avoid latency issues
        // when accessing Capella from a different Wide Area Network
        // or Availability Zone (e.g. your laptop).
        configProfile: 'wanDevelopment',
    })

    const bucket = cluster.bucket(bucketName)

    // Get a reference to the default collection, required only for older Couchbase server versions
    const defaultCollection = bucket.defaultCollection()

    const collection = bucket.scope('tenant_agent_00').collection('users')

    const user = {
        type: 'user',
        name: 'Michael',
        email: 'michael123@test.com',
        interests: ['Swimming', 'Rowing'],
    }

    // Create and store a document
    await collection.upsert('michael123', user)

    // Load the Document and print it
    // Prints Content and Metadata of the stored Document
    let getResult = await collection.get('michael123')
    console.log('Get Result: ', getResult)

    // Perform a SQL++ (N1QL) Query
    const queryResult = await bucket
        .scope('inventory')
        .query('SELECT name FROM `airline` WHERE country=$1 LIMIT 10', {
            parameters: ['United States'],
        })
    console.log('Query Results:')
    queryResult.rows.forEach((row) => {
        console.log(row)
    })
}

// Run the main function
main()
    .catch((err) => {
        console.log('ERR:', err)
        process.exit(1)
    })
    .then(process.exit)

module.exports = main;