 import { Collection } from "./Collection";
import { LinkedList } from "./LinkedList";

  describe("linked list", () => {
      it("can zip lists A", () => {
        const ll1 : LinkedList<number>= new LinkedList<number>() ;
        ll1.insert(1);
        ll1.insert(3);
        ll1.insert(2);
      
        const ll2 : LinkedList<number>= new LinkedList<number>();
        ll2.insert(5);
        ll2.insert(9);
        ll2.insert(4);

        // expect(ll1.toString()).toBe(
        //   "{ 1 } -> { 3 } -> { 2 } -> NULL"
        // );
        const ll3 = LinkedList.zip(ll1, ll2).toString();
        expect(ll3).toBe(
          "{ 2 } -> { 4 } -> { 3 } -> { 9 } -> { 1 } -> { 5 } -> NULL"
        );
      });
  
      it("can zip lists B", () => {
        const ll1 = new LinkedList<number>();
        ll1.append(1);
        ll1.append(3);
  
        const ll2 = new LinkedList<number>();
        ll2.append(5);
        ll2.append(9);
        ll2.append(4);
  
        const ll3 = LinkedList.zip(ll1, ll2);
        expect(ll3.toString()).toEqual(
          "{ 1 } -> { 5 } -> { 3 } -> { 9 } -> { 4 } -> NULL"
        );
      });
  
      it("can zip lists C", () => {
        const ll1 = new LinkedList<number>();
        ll1.append(1);
        ll1.append(3);
        ll1.append(2);
  
        const ll2 = new LinkedList<number>();
        ll2.append(5);
        ll2.append(9);
  
        const ll3 = LinkedList.zip(ll1, ll2);
        expect(ll3.toString()).toEqual(
          "{ 1 } -> { 5 } -> { 3 } -> { 9 } -> { 2 } -> NULL"
        );
      });


      it("append one node", () => {
        const cc1 = new LinkedList<number>();
         cc1.insert(3);
      
        expect(cc1.includes(3)).toBe(
          true
        );
      });

    });

  
