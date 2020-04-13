db.nodes.insert({ '_id': 'CEO', 'name': 'CEO', 'minions': ['LLK', 'CL'] });
db.nodes.insert({ '_id': 'LLK', 'name': 'LLK', 'minions': ['LST'] });
db.nodes.insert({ '_id': 'LST', 'name': 'LST', 'minions': [] });
db.nodes.insert({ '_id': 'CL', 'name': 'CL', 'minions': ['CCY','IB','L'] });
db.nodes.insert({ '_id': 'CCY', 'name': 'CCY', 'minions': ['AQ','CCK'] });
db.nodes.insert({ '_id': 'CCK', 'name': 'CCK', 'minions': [] });
db.nodes.insert({ '_id': 'AQ', 'name': 'AQ', 'minions': [] });
db.nodes.insert({ '_id': 'IB', 'name': 'I', 'minions': [] });
db.nodes.insert({ '_id': 'N', 'name': 'N', 'minions': [] });
db.nodes.insert({ '_id': 'S', 'name': 'S', 'minions': [] });
db.nodes.insert({ '_id': 'L', 'name': 'L', 'minions': [] });

db.nodes.aggregate([
  {
    '$match': {
      '_id': 'CEO'
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

db.nodes.update({'_id':'CEO'},{'$addToSet':{'minions':'CL'}};

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
