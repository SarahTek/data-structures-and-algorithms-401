import { LinkedList } from "./LinkedList";

describe("Linked List", () => {

  it("can append an element", () => {
    const list = new LinkedList<string>();

    list.insert("Frodo");
    list.insert("Sam");
    list.append("Pippin");
    list.insert("Merry");

    const str = list.toString();
    expect(str).toEqual(
      "{ Merry } -> { Sam } -> { Frodo } -> { Pippin } -> NULL"
    );
  });

  
  it("add multiple nodes to the end", () => {
    const list = new LinkedList<string>();

    list.insert("Frodo");
    list.insert("Sam");
    list.append("Pippin");
    list.append("Merry");

    // list.insertBefore("Frodo", "Sam");

    const str = list.toString();
    expect(str).toEqual(
      "{ Sam } -> { Frodo } -> { Pippin } -> { Merry } -> NULL"
    );
  });


  it("can insert a node before a node", () => {
    const list = new LinkedList<string>();

    list.insert("Frodo");
    list.insert("Sam");
    list.insert("Merry");

    list.insertBefore("Sam", "Pippin");

    const str = list.toString();
    expect(str).toEqual(
      "{ Merry } -> { Pippin } -> { Sam } -> { Frodo } -> NULL"
    );
  });
  

  it("can insert before the first node", () => {
    const list = new LinkedList<string>();

    list.insert("Frodo");
    list.insert("Sam");
    list.insert("Merry");
    
    list.insertBefore( "Merry","Puppin");

    const str = list.toString();
    expect(str).toEqual(
      "{ Puppin } -> { Merry } -> { Sam } -> { Frodo } -> NULL"
    );
  });


  it("can insert after an element", () => {
    const list = new LinkedList<string>();

    list.insert("Frodo");
    list.insert("Sam");
    list.insert("Merry");

    list.insertAfter("Sam", "Pippin");

    const str = list.toString();
    expect(str).toEqual(
      "{ Merry } -> { Sam } -> { Pippin } -> { Frodo } -> NULL"
    );
  });

  it("insert a node after the last node", () => {
    const list = new LinkedList<string>();

    list.insert("Frodo");
    list.insert("Sam");
    list.insert("Merry");

    list.insertAfter("Sam", "Pippin");

    const str = list.toString();
    expect(str).toEqual(
      "{ Merry } -> { Sam } -> { Pippin } -> { Frodo } -> NULL"
    );
  });
});
