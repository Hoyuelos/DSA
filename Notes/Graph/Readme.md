
Graph - 

Some unconventional methods -

detection_time (d) - time at which a node is detected.
finish_time (f) - time at which it is completely processed.
(this two are really cool properties - can be used to solve some good problems)

(ex - if u.f > v.f -> 'u' will come before 'v' in the topological sort)
(this can also be used to find strongly onnected components in a directed graph)

for nodes u,v - u is ancesstor of v iff  u.d < v.d < v.f < u.f  (in a dfs traversal)


colour of a node in  DFS -  ( this information can be stored in visited array itself)
white - univisited
grey - if visited by not finished (i.e. node is still in the call stack)
black - visited and finished (i.e. have traversed all of its adjacents, removed from the call stack)

back edge -> an edge from a node (u) to node(v) which is grey.  (i.e. v is the ancesstor of u) 
--- can this be used for cycle detection in directed graph?  
Yes, A directed graph G is acyclic if and only if a DFS of G has no back edges

forward edge -> an edge from u to v (u is ancestor of v), and the colour of v is black. (i.e. more than one path exist from u to v)

cross edge -> an edge from u to v, where v is black (there's only one path from u to v) --  v.d < v.f < u.d < u.f



Adjacency matrix - although adjacency list is more commonly used, it can be a better choice in some conditions. 
Ex - In matrix, we store info about vertex and edges as well. We can store info regarding edges in the matrix. (While an adjacency list is read-only - we cant store any additional information in it)
ex - weight of the edge can be stored in the matrix, if an edge is visited or not can be tracked using matrix




** find number of connected components in a directed graph. (strongly connected components)         <<this is really good.>>
- sort vertices based on their finishing time (descending order)

(take a note - a node, even in a connected component, might not be covered by dfs if there's 0 in-edges to it. i.e. it only have out edges. So a plain dfs that works for undirected graphs will not work here)



Union find Algorithm -



Spanning Tree - 
 


MST -

