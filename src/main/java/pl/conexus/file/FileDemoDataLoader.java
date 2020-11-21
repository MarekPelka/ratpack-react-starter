package pl.conexus.file;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.engine.jdbc.BlobProxy;
import pl.conexus.foundation.DemoDataLoader;
import pl.conexus.product.Product;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;

public class FileDemoDataLoader implements DemoDataLoader {
    private SessionFactory sessionFactory;

    FileDemoDataLoader(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }

    @Override
    public void loadData() {
        batchLoad(getDemoFiles(), sessionFactory);
    }

    private List<File> getDemoFiles() {
        List<File> files = new ArrayList<>();

        File file = new File();
        file.setName("Pizza image");
        file.setContent(BlobProxy.generateProxy(getImage("demo/pizza.jpg")));
        files.add(file);

        File file1 = new File();
        file1.setName("Makaron image");
        file1.setContent(BlobProxy.generateProxy(getImage("demo/makaron.jpg")));
        files.add(file1);

        File file2 = new File();
        file2.setName("Salatka image");
        file2.setContent(BlobProxy.generateProxy(getImage("demo/salatka.jpg")));
        files.add(file2);

        File file3 = new File();
        file3.setName("Steak image");
        file3.setContent(BlobProxy.generateProxy(getImage("demo/steak.jpg")));
        files.add(file3);

        File file4 = new File();
        file4.setName("Tost image");
        file4.setContent(BlobProxy.generateProxy(getImage("demo/tost.jpg")));
        files.add(file4);

        return files;
    }

    private byte[] getImage(String name) {

        InputStream is = Thread.currentThread().getContextClassLoader().getResourceAsStream(name);
        ByteArrayOutputStream buffer = new ByteArrayOutputStream();

        if (is == null) {
            return new byte[]{};
        }

        int nRead;
        byte[] data = new byte[16384];
        try {
            while ((nRead = is.read(data, 0, data.length)) != -1) {
                buffer.write(data, 0, nRead);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }

        return buffer.toByteArray();

    }
}
