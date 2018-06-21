# The Language Python

`dynamic type:` You do not need to declare what a variable will hold.

`automatic memory management:` Do not need to alocate and dealocate memory manually, it does it automatically.

- advantage: Doesn't have overflow problems
- disadvantage: Can be less efficient

Python is `Object Oriented` - Instead of procedular lists of actions, object-oriented programming is modeled around objects that interact with eachother. Classes generate objects and define their structure, like a blueprint.

**you can always do `simple.wikipedia.org` in front of your wiki link and it will give you a more simple definition for many things.**

## Code Notes

```PY
class Ball:
    """
    base class for bouncing objects
    """
    def __init__(self, bounds, position, velocity, color, radius):
        self.position = position
        self.velocity = velocity
        self.bounds = bounds
        self.color = color
        self.radius = radius
```

`self.position` is set to a local scope, where `position` would be set to a global scope.

```PY
  def update(self):
      # bounce at edges.  TODO: Fix sticky edges
      if self.position.x < 0 + self.radius or self.position.x > self.bounds[0] - self.radius: # screen width
          self.velocity.x *= -1
      if self.position.y < 0 + self.radius or self.position.y > self.bounds[1] - self.radius: # screen height
          self.velocity.y *= -1
      self.position += self.velocity

  def draw(self, screen, pygame):
      # cast x and y to int for drawing
      pygame.draw.circle(screen, self.color, [int(self.position.x), int(self.position.y)], self.radius)
```

**Object Oriented Programming** is very `modular`.

`pass` ends the segment and tells python basically "we're not doing anything here, just run it".

`vector2` in pygame holds an (x, y) coordinates.

```PY
class BouncingBall(Ball):
    """
    ball effected by gravity
    """
    # TODO:
    GRAVITY = .1

    def update(self):
        # This function will override the update in Ball();
        self.velocity.y += self.GRAVITY
        # Now that you've done your class specific stuff, call your parent's update function.
        super().update()

        pass
```

`super()` will call previous code from `.update()` or a previously defined bit of code.

If you're calling something, in the case of `GRAVITY` you will need to call it with `self`.

```PY
def debug_create_objects(object_list):
    for i in range(5):
        ball = BouncingBall(SCREEN_SIZE, Vector2(random.randint(100, 400), random.randint(100, 400)),
                            Vector2(random.random(), random.random()), [255, 0, 0], 10)
        object_list.append(ball)
        # ball = BouncingBall(SCREEN_SIZE, Vector2(50, 50),
        #                     Vector2(3, 3), [255, 0, 0], 10)
        # object_list.append(ball)

        # TODO: Create other ball types for testing
```

`for i in range(5):` is a for loop.

```PY
class RainbowBall(Ball):
    """
    Ball that changes colors
    """

    def update(self):
        r = (self.color[0] + 10) % 256
        g = (self.color[1] - 5) % 256
        b = (self.color[2] + 5) % 256
        self.color = [r, g, b]

        super().update()
```

This sets the color to be a rainbow.

```PY
class BouncingRainbow(BouncingBall, RainbowBall):
    """
    Ball that changes color and is affected by gravity
    """
    pass
```

`BouncingRainbow` is already calling everything contained within `Ball`, `BouncingBall`, and `RainbowBall` - therefor it already knows what to do, so when called it simply needs a `pass` and it will run.

---

## Commandline

`python -m pip install -U pip` - installs pip

`pip install pipenv` - installs pipenv

`python` - opens the python environment

`python src/hello_python.py` - runs python scripts at `python` then `directory/file.py`.

`pipenv --three` will create a pip environment specifically for python 3.

`pipenv shell` will open the pip shell.

**Note that this does not tell you when you are inside the shell, you will need to have a terminal specifically for it or you can run `pipenv shell` again to check.**

---

System Control Pannel

Advanced System Settings

Environment Variables

Path - Copy & Paste `c:\users\kevin\appdata\local\programs\python\python36-32\Scripts`
