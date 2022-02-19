export class Node<T> {
	private value: T;
	private next: Node<T> | null;

	constructor(value: T) {
		this.value = value;
		this.next = null;
	}

	public getValue(): T {
		return this.value;
	}
}
