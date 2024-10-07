<!---
This is a sample README.md file for a Couchbase Starter Kit. It includes a template for the README file that you can use in your repository. You can copy the contents of this file and replace the placeholders with the appropriate information for your starter kit.
-->

# Couchbase [Node/Typescript] Starter Kit

![Test Suite](https://github.com/couchbase-starter-kit/URL/actions/workflows/run-tests.yml/badge.svg)
![Couchbase Capella](https://img.shields.io/badge/Couchbase_Capella-Enabled-red)
[![License: MIT](https://cdn.prod.website-files.com/5e0f1144930a8bc8aace526c/65dd9eb5aaca434fac4f1c34_License-MIT-blue.svg)](/LICENSE)
![Static Badge](https://img.shields.io/badge/Code_of_Conduct-Contributor_Covenant-violet.svg)

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/couchbase-starter-kit/URL)
[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/couchbase-starter-kit/URL)

## Configuration

| Variable Name                      | Description                                                 |      Default value       |
|:-----------------------------------|:------------------------------------------------------------|:------------------------:|
| NODE_COUCHBASE_CONNECTION_STRING  | A couchbase connection string                           |            -             |
| NODE_COUCHBASE_USERNAME           | Username for authentication with Couchbase              |            -             |
| NODE_COUCHBASE_PASSWORD           | Password for authentication with Couchbase              |            -             |
| COUCHBASE_USE_CAPELLA              | Use to change the connection profile                        |          false           |
| COUCHBASE_DEFAULT_BUCKET           | The name of the Couchbase Bucket, parent of the scope       |         default          |
| COUCHBASE_DEFAULT_SCOPE            | The name of the Couchbase scope, parent of the collection   |         _default         |
| COUCHBASE_DEFAULT_COLLECTION       | The name of the Couchbase collection to store the Documents |         _default         |
| COUCHBASE_OTLP_ENABLED             | Enable traces and metrics OTLP export                       |          false           |
| COUCHBASE_OTLP_ENDPOINT            | The OTLP server endpoint to send metrics and traces         |            -             |

### Getting started

Follow these steps to get the starter kit up and running on your local machine.

**Prerequisites**

Make sure you have the following installed:

* Node.js

You will also need an account on Couchbase Capella to create a cluster and obtain the connection details.

**Clone the repository**

```bash
git clone https://github.com/couchbase-starter-kit/couchbase.git
cd URL
```

**Install dependencies**

```bash
bundle install
```

**Configure Couchbase Credentials**

Copy the `.env.sample` file in the root directory of the project and rename it to `.env`. Update the `.env` file with your Couchbase credentials as follows:

```bash
NODE_COUCHBASE_CONNECTION_STRING=
NODE_COUCHBASE_USERNAME=
NODE_COUCHBASE_PASSWORD=
COUCHBASE_USE_CAPELLA=
COUCHBASE_DEFAULT_BUCKET=default
COUCHBASE_DEFAULT_SCOPE=_default
COUCHBASE_DEFAULT_COLLECTION=_default
COUCHBASE_OTLP_ENABLED=false
COUCHBASE_OTLP_ENDPOINT=
```

You can obtain those credentials by first creating an account on Couchbase Capella at [https://cloud.couchbase.com/](https://cloud.couchbase.com/) and then creating a database called `rails_starter_app`. Inside the database, create a bucket. The name of the bucket is what you should use for the `COUCHBASE_DEFAULT_BUCKET` environment variable.

Once you have done so, you can navigate to the `Connect` tab in the database and copy the connection string URL. This is what you should use for the `NODE_COUCHBASE_CONNECTION_STRING` environment variable. You will also need to create a user with the appropriate permissions and use the username and password for the `NODE_COUCHBASE_USERNAME` and `NODE_COUCHBASE_PASSWORD` environment variables.

**Running the Test Suite**

This application includes the beginnings of a test suite using [language testing framework]. To run the test suite, use the following command:

```bash
framework testing command line
```

This will run all the tests and output the results in the terminal. You can run any specific test file by passing the file path as an argument to the `command_to_run_tests` command, as follows:

```bash
framework testing command line path/to/test/file
```

**Starting the Application**

To start the application, run the following command:

```bash
framework start command line
```

This will start the [framework] server, and you can access the application at [url:port](url:port).

### Contributing

Contributions are more than welcome! If you encounter any bugs or issues with the application, please open an issue on the GitHub repository. If you would like to contribute code, feel free to open a pull request with your changes. All contributors are expected to follow the [Code of Conduct](CODE_OF_CONDUCT.md).

### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.