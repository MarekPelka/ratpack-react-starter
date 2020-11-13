package pl.conexus;

import ratpack.server.RatpackServer;

import static ratpack.jackson.Jackson.json;

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
		RatpackServer.start(server -> server
				.handlers(chain -> chain
						.get(ctx -> ctx.render(json(new Person("John"))))
						.get(":name", ctx -> ctx.render(json(new Person(ctx.getPathTokens().get("name")))))
				)
		);
	}
}