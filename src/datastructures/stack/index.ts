/* A stack is a data structure where insertion and deletion of items
 * takes place at one end in LIFO order.
 */
export class Stack<T> {
	private data: T[] = [];

	/* Add a node in O(1) time. */
	public push(node: T): void {
		this.data.push(node);
	}

	/* Remove the last inserted node in O(1) time and return it, or undefined if there are no nodes remaining. */
	public pop(): T | undefined {
		return this.data.pop();
	}

	/* Return the number of elements in the stack in O(1) time. */
	public size(): number {
		return this.data.length;
	}
}
