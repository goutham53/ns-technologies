// TodoList.java
import java.util.ArrayList;
import java.util.List;

public class TodoList {
    private List<Todo> todos;

    public TodoList() {
        this.todos = new ArrayList<>();
    }

    // Add a todo to the list
    public void addTodo(String task) {
        Todo newTodo = new Todo(task);
        todos.add(newTodo);
        System.out.println("Added new todo: " + task);
    }

    // Display all todos
    public void displayTodos() {
        if (todos.isEmpty()) {
            System.out.println("No todos available.");
        } else {
            for (Todo todo : todos) {
                todo.display();
            }
        }
    }

    // Mark a todo as completed by index
    public void completeTodo(int index) {
        if (index >= 0 && index < todos.size()) {
            todos.get(index).markCompleted();
            System.out.println("Todo " + index + " marked as completed.");
        } else {
            System.out.println("Invalid index.");
        }
    }
}
