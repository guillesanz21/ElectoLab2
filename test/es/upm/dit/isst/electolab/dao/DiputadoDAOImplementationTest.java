package es.upm.dit.isst.electolab.dao;

import static org.junit.Assert.assertNull;
import static org.junit.jupiter.api.Assertions.*;

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
		
		diputadoTest1.setIdDiputado(603);
		diputadoTest2.setIdDiputado(604);
		diputadoTest1.setNombre("Pepito");
		diputadoTest2.setNombre("Pepito");
		
		diputadodao.create(diputadoTest1);
		diputadodao.create(diputadoTest2);
		
		diputadoTest1.setNombre("Jaime");
		diputadodao.update(diputadoTest1);
		
		diputadoTest1 = diputadodao.read(603);
		assertEquals("Jaime", diputadoTest1.getNombre());


	}

	@Test
	void testDelete() {
		DiputadoDAO diputadodao = DiputadoDAOImplementation.getInstancia();
		diputadodao.delete(diputadodao.read(603));
		diputadodao.delete(diputadodao.read(604));
		diputadodao.delete(diputadodao.read(88888));



	}

	@Test
	void testReadAll() {
		fail("Not yet implemented");
	}

	@Test
	void testReadTag() {
		fail("Not yet implemented");
	}

}
