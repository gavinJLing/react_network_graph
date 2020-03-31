# react_network_graph
Integrate React and D3 to create a network graph visualisation


An attempt to integrate D3 (force directed view) into React. To produce a 'fog-of-war' approach to network topology visualisation.


I suspect at this point I will just hard code JS data object to reflect the intended target network topology. Later this can be drawn from a REST api backed by some database (maybe Neo4j and tinkerpop). 

I want the graph visualisation to drive other display components. Which may support futher D3 concepts such as brushes and transformations.

This is a view only simulation. At this point i do not intent to implement any creation (in the network topology) capability.


I would like to be able to mix in different data sets to 'add' to the network graph,but that may be getting to far ahead. 

Dream list of things to achieve
* [ ] Create a React spa, with some basic UI capability to accept data 