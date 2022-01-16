step-node
===

Dynamically chainable executions

Basic usage
---

> ( npm i | yarn add ) step-node

```js
import { StepNode } from 'step-node';

const sourceNode = new StepNode();
// defining an optional parser
sourceNode.parser = (name = 'n/a', age = 0, dob = 'n/a') => { name, age, dob };
// processor receives the node and only one input
sourceNode.processor = async (node, person) => {
  // person = { name, age, dob } received from the parser
  const { person } = await savePersonToDB(person);
  node.next(person, success);
};

const targetNode = new StepNode();
targetNode.parser = (person, saved) => { person, saved };
targetNode.processor = (node, { person, saved }) => {
  if (saved) {
    console.log('Person saved!', person);
  }
};

// wire targetNode into sourceNode
sourceNode.target = targetNode;

// start execution
sourceNode.process('John Doe', 28, '');

```

Or with TypeScript

```ts
import { StepNode } from 'step-node';

interface Person {
  name: string;
  name: string;
  dob: string;
}

const sourceNode = new StepNode<{}, Person>();
sourceNode.parser = (name = 'n/a', age = 0, dob = 'n/a'): Person => { name, age, dob };
sourceNode.processor = (node: StepNode<{}, number>, input: Person): void => {
  // do something...
  node.next(/* outputs */);
}

```

For further usage see `examples` folder

Concept
---

Conceptually, within this library, nodes are simple processor functions that receive ***ONE*** input parameter do something and continue execution with output values. You can dynamically create a chain of node that feed data among themselves in a linear fashion - either synchronously or asynchronously.

Each node has one target node it feeds outputs into, this target can be changed dynamically, on-demand. Exception to this rule are the `BroadcasterNode`, `RouterNode` and the `DistributorNode` nodes, these nodes allow more scalability and /or routability to your execution. More details about node types in the next section.

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
- `BroadcasterNode` - allows you to add one or more target nodes for parallel processes/execution.
