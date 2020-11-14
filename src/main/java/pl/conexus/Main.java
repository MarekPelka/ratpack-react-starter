package pl.conexus;

import ratpack.server.BaseDir;
import ratpack.server.RatpackServer;

import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Map;
import java.util.TreeMap;

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

    	// https://ratpack.io/manual/current/gradle.html#running_the_application
		boolean isDevelopmentMode = Boolean.parseBoolean(System.getProperty("ratpack.development"));

		Path staticPath;
		if (isDevelopmentMode) {
			System.out.println("Starting server in development mode.");
			Map<String, String> sortedMap = new TreeMap(System.getProperties());
			sortedMap.forEach((k, v) -> System.out.println("\t" + k + " => " + v));

			String projectDirectory = System.getProperty("user.dir");
			staticPath = Paths.get(projectDirectory, "frontend", "build");
		} else {
			staticPath = BaseDir.find().getRoot().resolve("static");
		}

		RatpackServer.start(server -> server
				.serverConfig(c -> c.baseDir(staticPath))
				.handlers(chain -> chain
						.get(":name", ctx -> ctx.render(json(new Person(ctx.getPathTokens().get("name")))))
						.files(f -> f.indexFiles("index.html"))
				)
		);
	}
}