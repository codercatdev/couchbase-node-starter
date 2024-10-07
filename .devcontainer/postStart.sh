#!/bin/bash

# Export Couchbase-related environment variables
export RAILS_COUCHBASE_CONNECTION_STRING="couchbase://localhost"
export RAILS_COUCHBASE_USERNAME="Administrator"
export RAILS_COUCHBASE_PASSWORD="password"
export COUCHBASE_USE_CAPELLA=false
export COUCHBASE_DEFAULT_BUCKET="default"
export COUCHBASE_DEFAULT_SCOPE="_default"
export COUCHBASE_DEFAULT_COLLECTION="_default"
export COUCHBASE_OTLP_ENABLED=false

# Start Couchbase server
echo "Starting Couchbase server..."
./cb-install/opt/couchbase/bin/couchbase-server --start

# Sleep for 10 seconds to allow Couchbase server to start
echo "Sleeping for 10 seconds to allow Couchbase server to start..."
sleep 10

# Run Couchbase setup command
cbsh -c "source ./scripts/dbSetup.nu; dbSetup \$env.COUCHBASE_DEFAULT_BUCKET \$env.COUCHBASE_DEFAULT_SCOPE \$env.COUCHBASE_DEFAULT_COLLECTION"

# Print confirmation
echo "Couchbase environment variables and setup completed. Couchbase server started."
