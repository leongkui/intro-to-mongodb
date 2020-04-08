db.nodes.insert({ '_id': 'CSS', 'name': 'Code Father', 'minions': ['LLK', 'CL'] });
db.nodes.insert({ '_id': 'LLK', 'name': 'Lim Leong Kui', 'minions': ['LST'] });
db.nodes.insert({ '_id': 'LST', 'name': 'Lim Swee Tat', 'minions': [] });
db.nodes.insert({ '_id': 'CL', 'name': 'Colin Leong', 'minions': ['CCY','IB','L'] });
db.nodes.insert({ '_id': 'CCY', 'name': 'Cheah Chu Yeow', 'minions': ['AQ','CCK'] });
db.nodes.insert({ '_id': 'CCK', 'name': 'Chew Choon Keat', 'minions': [] });
db.nodes.insert({ '_id': 'AQ', 'name': 'Adrian Quek', 'minions': [] });
db.nodes.insert({ '_id': 'IB', 'name': 'Ibrahim', 'minions': [] });
db.nodes.insert({ '_id': 'N', 'name': 'N from Yishun', 'minions': [] });
db.nodes.insert({ '_id': 'S', 'name': 'Stella', 'minions': [] });
db.nodes.insert({ '_id': 'L', 'name': 'Laurence', 'minions': [] });

db.nodes.aggregate([
  {
    '$match': {
      '_id': 'CSS'
    }
  }, {
    $graphLookup: {
      from: "nodes",
      startWith: "$minions",
      connectFromField: "minions",
      connectToField: "_id",
      as: "CSSMafia",
      depthField: "depth",
      maxDepth: 1
    }
  }
]).pretty();

db.nodes.update({'_id':'CSS'},{'$addToSet':{'minions':'CL'}};

db.nodes.aggregate([
  {
    '$match': {
      '_id': 'CSS'
    }
  }, {
    $graphLookup: {
      from: "nodes",
      startWith: "$minions",
      connectFromField: "minions",
      connectToField: "_id",
      as: "CSSMafia",
      depthField: "depth",
      maxDepth: 1
    }
  }
]).pretty();

db.nodes.aggregate([
  {
    '$match': {
      '_id': 'CSS'
    }
  }, {
    $graphLookup: {
      from: "nodes",
      startWith: "$minions",
      connectFromField: "minions",
      connectToField: "_id",
      as: "CSSMafia",
      depthField: "depth",
      maxDepth: 2
    }
  }
]).pretty();
