


an array can be iterated using recursion, instead of using a for loop. But that a costly way to iterate an array. (keeping this in mind we can improvise the naive recursive approach.)


<h2 Recursion - />

Function calling itself.

* NOTE - For efficient recursive solution, its better to share resources(Lists,Maps,etc) between the recursive calls, in contrary to creating them everytime in the recurvice method (in this case, they will be created at each node of recursion).

If this can be avoided by sharing resources via function call (by passing them in method arguments), it will significantly improve the runtime of the method (even though the time omplexity is same)

<h3 In conclusion, in recursion, its better to share resources (among function calls) instead of creating local resources at each function node (of recursion tree) />

reference code - 
when reources are shared - https://leetcode.com/problems/palindrome-partitioning/submissions/1000142871/       
when resources are not shared and are created locally - https://leetcode.com/problems/palindrome-partitioning/submissions/1000124962/
(compare time-taken by both approaches)       



<h2 We will be discussing two approaches in backtracking by refering  Subsets II problem  (https://leetcode.com/problems/subsets-ii/description/) />


<h3 Approach 1 - />

In a naive backtracking approaches, where at every node we make a decision for each element and then recursively go into the respective branch of the recursion tree and process further elements.

Here, for every element we have 2 choices - to choose it or to ommit it    --> this is the main idea for our recursion tree here


public void dfs(int arr[], int n, int i, List<Integer> list){

        if(i==n){
            List<Integer> temp = new ArrayList<>(list);
            set.add(temp);
            return;
        }

        // dont consider ith element        
        dfs(arr,n,i+1,list);

        // consider it
        list.add(arr[i]);
        dfs(arr,n,i+1,list);
        list.remove(list.size()-1);        

}




<h3 Approach 2 - />

Here, our main idea is to pick any one of the available elements and proceed with the recursion. (Instead of having 2 choices for each element as discussed in approach 1)


At each node in our recursive tree, we have a choice to choose any one of the given inputs.  

private void dfs(int ind, int[] arr, ArrayList<Integer> list, List<List<Integer>> ans) {
        ans.add(new ArrayList<>(list));
        
        // using loop considering each element one by one
        for(int i=ind;i<arr.length;i++){
            if(i!=ind && arr[i]==arr[i-1]) continue;
            list.add(arr[i]);
            subset2(i+1,arr,list,ans);
            list.remove(list.size()-1);
        }
}



Approach 2 is more universal. i.e. can be used in more number of problems as compared to approach 1.

Ques. Which approach is better? or are they same?