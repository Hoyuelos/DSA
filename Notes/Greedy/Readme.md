
A Greedy algorithm is an approach to solving a problem that selects the most appropriate option based on the current situation. This algorithm ignores the fact that the current best result may not bring about the overall optimal result. Even if the initial decision was incorrect, the algorithm never reverses it.

The greedy method is a simple and straightforward way to solve optimization problems. It involves making the locally optimal choice at each stage with the hope of finding the global optimum.


However, you can implement a greedy solution only if the problem statement follows two properties mentioned below - 
1. Greedy Choice Property: Choosing the best option at each phase can lead to a global (overall) optimal solution.
2. Optimal Substructure: If an optimal solution to the complete problem contains the optimal solutions to the subproblems, the problem has an optimal substructure.


The algorithm is fast and efficient with time complexity of O(n log n) or O(n). Therefore applied in solving large-scale problems.

The search for optimal solution is done without repetition – the algorithm runs once.


By following the steps given below, you will be able to formulate a greedy solution for the given problem statement:

Step 1: In a given problem, find the best substructure or subproblem.
Step 2: Determine what the solution will include (e.g., largest sum, shortest path).
Step 3: Create an iterative process for going over all subproblems and creating an optimum solution.



Limitations of Greedy Algorithm
Factors listed below are the limitations of a greedy algorithm:

1. The greedy algorithm makes judgments based on the information at each iteration without considering the broader problem; hence it does not produce the best answer for every problem.
2. The problematic part for a greedy algorithm is analyzing its accuracy. Even with the proper solution, it is difficult to demonstrate why it is accurate. 
3. Optimization problems (Dijkstra’s Algorithm) with negative graph edges cannot be solved using a greedy algorithm.





Different Types of Greedy Algorithm
	Selection Sort
	Knapsack Problem
	Minimum Spanning Tree
	Single-Source Shortest Path Problem
	Job Scheduling Problem
	Prim's Minimal Spanning Tree Algorithm
	Kruskal's Minimal Spanning Tree Algorithm
	Dijkstra's Minimal Spanning Tree Algorithm
	Huffman Coding
	Ford-Fulkerson Algorithm


repetetive subproblems
optimal substructure