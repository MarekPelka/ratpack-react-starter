package pl.conexus;

public class Main {

    public static class Person {
		private final String name;

		public Person(String name) {
			this.name = name;
		}

		public String getName() {
			return name;
		}
	}

	public static void main(String... args) throws Exception {
    	Server server = new Server();
    	server.start();
	}
}