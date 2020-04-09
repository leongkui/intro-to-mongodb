# MongoDB Workshop

## MongoDB 101
-  Document Store
-  Replica, sharding
-  Data Modeling & CRUD
-  Time Series modeling

Presentation here: [https://docs.google.com/presentation/d/1beCq_eHu6NVP7402edxkwkTqROMbCLpNnnimfdgJV8I/edit?usp=sharing](https://docs.google.com/presentation/d/1beCq_eHu6NVP7402edxkwkTqROMbCLpNnnimfdgJV8I/edit?usp=sharing)

### Preparation for workshop:
Install mongodb on your laptop:
- Brew/Binary way: https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/
- Docker: https://hub.docker.com/_/mongo/

Loading the dataset:
1. ```(cd resources && tar xvfz carts.tgz && mongorestore -h localhost -d workshop carts)```
