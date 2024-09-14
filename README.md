# TODO

TODO is nodejs backend service for APIs, these API will have create user, login into system and add todo's and perform other functionalities and ensure feature use if user is authenticated.

## Installation

Use the package manager [npm](https://pip.pypa.io/en/stable/) to install todo packages that are required for development as well as to run the service on local machine.

```bash
npm install
```

## Database Connection Setup

install dotenv packge using npm, if not found in package.json withing dependencies

create new file '.env', here we will store all our credentials and other confidential resources that don't require to be published out to developers and is user specific.

For now will add database configurations, for this project we are using postgres, you can change to your desired database

DB_USER='root'

DB_PASSWORD='root'

DB_HOST='localhost'

DB_PORT='3030'

DB_NAME='todos'

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

No licensing is provided to this service currently, maybe in near future it might get licensed. Till than happy coding engineer.
