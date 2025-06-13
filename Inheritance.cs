// Inheritance violates the encapsulation

// Another problem - tightly couple

// Favour composition over inheritance

class Human
{
    public string Name { get; set; }
}


class Teacher
{
    Human human;
    public Teacher(Human human)
    {
        this.human.Name = "Name";
    }
}