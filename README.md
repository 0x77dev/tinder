# Tinder Research

The goal of this project is to analyze the data from the Tinder API to create datasets that can be used for further research purposes.

In future this research will be used to automate the process of finding a matches on Tinder.

_Not affiliated with Match Group, InterActiveCorp or Tinder Inc. Created for educational purposes only. Data collection might be illegal. This repository does not contains any data collected from Tinder services._

## CLI

You can find more information about the CLI commands in the [CLI README](./cli/README.md).

## Getting Started

### Prerequisites

- Node.js >= 16.x
- Yarn >= 1.22.x

### Installing

1. Clone the repository
2. Install the dependencies with `yarn install`

### Running

1. Run `yarn tinder proxy`
2. Open Proxy Web UI, download certificate and install it
3. Login to Tinder with your account
4. Wait for the logs to show that the token was captured
5. Run `yarn tinder profile` to get your profile data
6. Run `yarn tinder proxy -i /tmp/images_output_dir` to save images from tinder to the specified directory. This is useful for creating datasets for machine learning purposes.
7. Run `yarn tinder token` to get your api token.
8. Run `yarn tinder api profile` to get you full profile data in json.

## Aknowledgements

- Shot-out to [anyproxy](https://github.com/alibaba/anyproxy) team for providing a fast and convenient way to capture the traffic from the Tinder app.

## License

Licensed under AGPL-3.0 License. See [LICENSE](LICENSE) for more information.
