step-node
===

Dynamically chainable processes

Concept
---

Conceptually, within this library, nodes are simple processor functions that receive ***ONE*** input parameter do something and continue execution with output values. You can dynamically create a chain of node that feed data among themselves in a linear fashion - either synchronously or asynchronously.

Each node has one target node it feeds outputs into, this target can be changed dynamically, on-demand. Exception to this rule are the `BroadcastNode`, `RouterNode` and the `DistributorNode` nodes, these nodes allow more scalability and /or routability to your execution. More details about node types in the next section.

Nodes can have optional parsers that can receive any number and type of arguments and compile them into one input to be processed.

Nodes can also have **Scope**s that allow you to persist data across multiple processes/executions.

Single-target node types
---

- `StepNode` - base node with an optional parser, optional scope, a processor function and a target to feed outputs to
- `ActiveNode` - like `StepNode` but you can `activate` or `deactivate` it dynamically.

Dual-target node types
---

- `SwapNode` - like `StepNode` but allows dynamic `swap`-ing between 2 targets

Multi-target node types
---

Multi-target node types do not have parsers or scopes - they purely exist to allow for scalability or routability.

- `RouterNode` - allows you feed your execution into a node that acts as a router whhere each route has a target node.
- `DistributorNode` - allows you to add one or more target nodes to distribute processes/executions between, in a round-robin fashion.
- `BroadcastNode` - allows you to add one or more target nodes for parallel processes/execution.

Basic usage
---

See `examples` folder
