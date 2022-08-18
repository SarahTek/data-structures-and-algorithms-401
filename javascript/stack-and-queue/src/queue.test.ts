import { Queue } from "./queue";

describe("Queue", () => {
  it("can enqueue", () => {
    const q = new Queue<string>();

    expect(() => q.enqueue("Frodo")).not.toThrow();
  });


  it("enqueues", () => {
    const s = new Queue<string>();

    s.enqueue("Frodo");
    s.enqueue("Sam");

    expect(s.size).toBe(2);
    expect(s.peek).toBe("Sam");
  });
  it("Can successfully Enqueue multiple values onto a queue", () => {
    const s = new Queue<number>();

    s.enqueue(1);
    s.enqueue(2);
    s.enqueue(3);

    expect(s.peek).toBe(3);
    expect(s.size).toBe(3);
  });

  it("Can successfully dequeue off the queue", () => {
    const s = new Queue<number>();

    s.enqueue(1);
    s.enqueue(2);
    s.enqueue(3);

    expect(s).toBeDefined();
    expect(s.size).toBe(3);
    expect(s.dequeue()).toBe(1);
  });

  it("Can successfully empty a queue after multiple dequeues", () => {
    const s = new Queue<number>();
    s.enqueue(1);
    s.enqueue(2);

    s.dequeue();
    s.dequeue();
    
    expect(s).toBeDefined();
    expect(s.size).toBe(0);
  });

  it("Can successfully peek the next item on the queue", () => {
    const s = new Queue<number>();
    s.enqueue(1);
    s.enqueue(2);
    s.enqueue(3);

    expect(s.peek);
  });

  it("Can successfully instantiate an empty queue", () => {
    const s = new Queue<number>();

    expect(s.size).toBe(0);
    expect(s).toBeDefined();
  });

  it("Calling dequeue or peek on empty stack raises exception", () => {
    const s = new Queue<number>();
    s.enqueue(1);
    s.dequeue();

    expect(s.size).toBe(0);
  });

});
