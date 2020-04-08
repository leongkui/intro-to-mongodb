from pymongo import MongoClient
import random

client = MongoClient()

carts = client.workshop.carts

shopper_BASE = "shopper"
addresses = ["AMK", "Yishun", "Jurong", "Novena", "Boon Lay", "Kallang", "Tanjong Pagar"]
payment_choices = ["AMEX", "MASTER", "VISA", "SPCOIN"]
payment_status = ["paid", "notpaid", "cancel", "refund"]

items = [
    { 'name': "24k gold ring", 'cost': 100000 },
    { 'name': "big purple diamond", 'cost': 10000000 },
    { 'name': "beautiful sapphire", 'cost': 100500000 },
    { 'name': "nice emerald", 'cost': 2060000 },
    { 'name': "glittering ruby", 'cost': 5608000 },
    { 'name': "some junk", 'cost': 1000000000 }
]

for record_number in range(1,random.randint(10000,100000)):
    this_cart = {}
    this_cart['shopper'] = shopper_BASE + str(random.randint(1,10000))
    this_cart['address'] = random.choice(addresses) + str(random.randint(1,1000))
    this_cart['paymentMethod'] = random.choice(payment_choices)
    this_cart['paymentStatus'] = random.choice(payment_status)

    this_cart['items'] = []
    this_cart['total'] = 0
    for item in range(1,random.randint(1,9)):
        this_item = random.choice(items)
        quantity = random.randint(1,50)
        this_item['quantity'] = quantity
        this_cart['items'].append(this_item)
        this_cart['total'] += this_item['quantity'] * this_item['cost']

    print(this_cart)
    carts.insert(this_cart)
