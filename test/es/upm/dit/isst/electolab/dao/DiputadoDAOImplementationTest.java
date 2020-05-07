package es.upm.dit.isst.electolab.dao;

import static org.junit.Assert.assertNull;
import static org.junit.jupiter.api.Assertions.*;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;

import es.upm.dit.isst.electolab.model.Diputado;

class DiputadoDAOImplementationTest {

	@BeforeAll
	static void setUpBeforeClass() throws Exception {
	}

	@AfterAll
	static void tearDownAfterClass() throws Exception {
	}

	@Test
	void testCreate() {
		DiputadoDAO diputadodao = DiputadoDAOImplementation.getInstancia();
		
		Diputado diputadoTest1 = new Diputado();
		Diputado diputadoTest2 = new Diputado();
		
		diputadoTest1.setIdDiputado(603);
		diputadoTest2.setIdDiputado(604);
		diputadoTest1.setNombre("Pepito");
		diputadoTest2.setNombre("Pepito");
		
		diputadodao.create(diputadoTest1);
		diputadodao.create(diputadoTest2);
		
		//El nombre se asigna correctamente
		assertEquals(diputadodao.read(603).getNombre(),"Pepito");
		
		//Prueba de que aunque tengan el mismo nombre no sean el mismo objeto
		assertNotEquals(diputadoTest1,diputadoTest2);
		
		//No encuentra un diputado que no existe 
		assertNull(diputadodao.read(88888));
		
		
		diputadodao.delete(diputadodao.read(603));
		diputadodao.delete(diputadodao.read(604));
		
		
	}

	@Test
	void testRead() {
		DiputadoDAO diputadodao = DiputadoDAOImplementation.getInstancia();

		assertNull(diputadodao.read(88888));
		assertNotNull(diputadodao.read(6));

	}

	@Test
	void testUpdate() {
		DiputadoDAO diputadodao = DiputadoDAOImplementation.getInstancia();

		Diputado diputadoTest1 = new Diputado();
		Diputado diputadoTest2 = new Diputado();
		Diputado diputadoTest3 = new Diputado();
		
		diputadoTest1.setIdDiputado(600);
		diputadoTest2.setIdDiputado(601);
		diputadoTest3.setIdDiputado(605);
		diputadoTest1.setNombre("Pepito");
		diputadoTest2.setEdad(50);
		diputadoTest3.setProvincia("Madrid");
		
		diputadodao.create(diputadoTest1);
		diputadodao.create(diputadoTest2);
		diputadodao.create(diputadoTest3);
		
		diputadoTest1.setNombre("Jaime");
		diputadodao.update(diputadoTest1);
		
		diputadoTest1 = diputadodao.read(600);
		
		//Comprobamos que ha funcionado el metodo update comparando el atributo nombre con el nuevo nombre
		assertEquals("Jaime", diputadoTest1.getNombre());
		
		diputadoTest2.setEdad(48);
		diputadodao.update(diputadoTest2);
		diputadoTest2 = diputadodao.read(601);
		assertEquals(48, diputadoTest2.getEdad());
		
		diputadoTest3.setProvincia("Barcelona");
		diputadodao.update(diputadoTest3);
		diputadoTest3 = diputadodao.read(605);

		//assertNotEquals("Madrid", diputadoTest3.getProvincia());
		assertEquals("Barcelona", diputadoTest3.getProvincia());
		
		
		
		
		diputadodao.delete(diputadodao.read(600));
		diputadodao.delete(diputadodao.read(601));
		diputadodao.delete(diputadodao.read(605));


	}

	@Test
	void testDelete() {
		DiputadoDAO diputadodao = DiputadoDAOImplementation.getInstancia();
		Diputado diputadoTest1 = new Diputado();
		diputadoTest1.setIdDiputado(600);
		diputadodao.create(diputadoTest1);
		diputadodao.delete(diputadoTest1);
		assertNull(diputadodao.read(600));
		
		

	}

	@Test
	void testReadAll() {
		DiputadoDAO diputadodao = DiputadoDAOImplementation.getInstancia();
		List<Diputado> diputadoTest = new ArrayList();
		for (int i=1;i<351;i++) {
			
			diputadoTest.add(diputadodao.read(i));
			
		}
		assertEquals(diputadoTest,diputadodao.readAll());
	}

	
	@Test
	void testReadTag() {
		DiputadoDAO diputadodao = DiputadoDAOImplementation.getInstancia();
		List<Diputado> diputadoTest = new ArrayList();
		List<Diputado> diputadosMadrid = new ArrayList();
		for (int i=1;i<351;i++) {
			
			diputadoTest.add(diputadodao.read(i));
			if (diputadoTest.get(i-1).getProvincia().equals("Madrid")) {
				diputadosMadrid.add(diputadodao.read(i));
				
			}
		}
		assertEquals(diputadosMadrid, diputadodao.readTag("provincia", "Madrid"));
	}

}