export class Queue<T> {
	private data: T[] = [];

	public push(node: T) {
		this.data.push(node);
	}

	public pop(): T | undefined {
		return this.data.shift();
	}
}
