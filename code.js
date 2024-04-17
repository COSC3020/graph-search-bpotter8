function depthFirstSearch(graph, startNode, targetNode) {
    var routeTaken = [];
    var visited = [];
    var stack = [[startNode]];

    while (stack.length) {
        var currentPath = stack.pop();
        var currentNode = currentPath[currentPath.length - 1];

        if (!visited.includes(currentNode)) {
            routeTaken.push(currentNode);
            visited.push(currentNode);

            if (currentNode === targetNode) {
                return currentPath;
            }
            var attachedNodes = graph[currentNode];

            for (var attachedNode of attachedNodes) {
                if (!visited.includes(attachedNode)) {
                    var bestPath = currentPath.slice();
                    bestPath.push(attachedNode);
                    stack.push(bestPath);
                }
            }
        }
    }
    return [];
}
