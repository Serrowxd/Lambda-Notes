#include "stdio.h"
#include "stdlib.h"
#include "math.h"

typedef struct Point {
  float x;
  float y;
} Point;

typedef struct Circle {
  Point *center;
  float radius;
} Circle;

Circle *createCircle(float x, float y, float radius)
{
  Circle *c = malloc(sizeof(struct Circle));
  c->center = malloc(sizeof(struct Point));
  c->center->x = x;
  c->center->y = y;
  c->radius = radius;
  return c;
}

int checkIntersection(Circle *c1, Circle *c2)
{
  float sq_x = pow(c1->center->x - c2->center->x, 2);
  float sq_y = pow(c1->center->y - c2->center->y, 2);
  
  float sq_dist = sq_x + sq_y;
  float sq_rad = (c1->radius + c2->radius) * (c1->radius + c2->radius);
  
  if (sq_dist == sq_rad) return 1;
  else if (sq_dist > sq_rad) return -1;
  else return 0;
}
 
void printResult(int rv)
{
  if (rv == 1) {
    printf("Circles lie tangent to each other\n");
  } 
  
  else if (rv < 0) {
    printf("Circles do not intersect\n");
  }
  
  else {
    printf("Circles intersect\n");
  }
}

int main(void)
{
  Circle *c1 = createCircle(-10, 8, 30);
  Circle *c2 = createCircle(14, -24, 10);
  
  int rv = checkIntersection(c1, c2);
  
  printResult(rv);
  
  c1 = createCircle(53.2329, 97.3497, 22.2222);
  c2 = createCircle(29.3452, 28.0989, 51.3451);
  
  rv = checkIntersection(c1, c2);
  
  printResult(rv);
  
  return 0;
}