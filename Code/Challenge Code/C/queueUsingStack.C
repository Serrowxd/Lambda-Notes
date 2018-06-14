#include <stdio.h>
#include <stdlib.h>
// The stack struct
typedef struct Stack {
 int top;
 unsigned capacity;
 int* array;
} Stack;
// Function to create a stack of given capacity.
// It initializes size of stack as 0.
Stack* createStack(unsigned capacity)
{
 Stack* stack = (Stack*) malloc(sizeof(Stack));
 stack->capacity = capacity;
 stack->top = -1;
 stack->array = (int*) malloc(stack->capacity * sizeof(int));
 return stack;
}
// Stack is full when top is equal to the last index
int isFull(Stack* stack)
{
 return stack->top == stack->capacity - 1;
}
// Stack is empty when top is equal to -1
int isEmpty(Stack* stack)
{
 return stack->top == -1;
}
// Function to add an item to the stack. Increases top by 1.
void push(Stack* stack, int item)
{
 if (isFull(stack)) {
 return;
 }
 stack->array[++stack->top] = item;
}
// Function to remove an item from the stack. Decreases top by 1.
int pop(Stack* stack)
{
 if (isEmpty(stack)) {
 return -1;
 }
 return stack->array[stack->top--];
}
// The queue struct
typedef struct Queue {
 Stack* stack; 
} Queue;
// Create a queue with the given capacity
Queue* createQueue(unsigned capacity)
{
 Queue* queue = (Queue*) malloc(sizeof(Queue));
 queue->stack = createStack(capacity);
 return queue;
}
// Add and item to the queue
void enqueue(Queue* queue, int item)
{
 if (isFull(queue->stack)) {
 return;
 }
 
 push(queue->stack, item);
 printf("%d enqueued onto queue\n", item);
}
// Remove the queue element that was least-recently added
int dequeue(Queue* queue)
{
 int top, result;
 top = pop(queue->stack);
 
 if (isEmpty(queue->stack)) {
 return top;
 } else {
 result = dequeue(queue);
 push(queue->stack, top);
 return result;
 }
}
// Program to test above functions
int main()
{
 Queue* queue = createQueue(100);
 
 enqueue(queue, 10);
 enqueue(queue, 20);
 enqueue(queue, 30);
 
 printf("%d dequeued from queue\n", dequeue(queue));
 printf("%d dequeued from queue\n", dequeue(queue));
 printf("%d dequeued from queue\n", dequeue(queue));
 
 return 0;
}