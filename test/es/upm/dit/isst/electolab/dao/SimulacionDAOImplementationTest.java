package es.upm.dit.isst.electolab.dao;

import static org.junit.jupiter.api.Assertions.*;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;

import es.upm.dit.isst.electolab.model.Diputado;
import es.upm.dit.isst.electolab.model.Partido;
import es.upm.dit.isst.electolab.model.Simulacion;
import es.upm.dit.isst.electolab.model.UsuarioRegistrado;

class SimulacionDAOImplementationTest {

	@BeforeAll
	static void setUpBeforeClass() throws Exception {
	}

	@AfterAll
	static void tearDownAfterClass() throws Exception {
	}

	@Test
	void testCreate() {
		SimulacionDAO simulaciondao = SimulacionDAOImplementation.getInstancia();
		Simulacion simulacionTest = new Simulacion();
		
		simulacionTest.setIdSimulacion(500);
		simulaciondao.create(simulacionTest);
		assertEquals(simulacionTest,simulaciondao.read(500));
		simulaciondao.delete(simulacionTest);
	}

	@Test
	void testRead() {
		SimulacionDAO simulaciondao = SimulacionDAOImplementation.getInstancia();
		
		Simulacion simulacionTest = new Simulacion();
	
		
		simulacionTest.setIdSimulacion(700);
		simulacionTest.setTituloLey("Ley test");
		simulacionTest.setTipoSimulacion("Simulacion1");
		
		simulaciondao.create(simulacionTest);
	
		
	
		assertEquals(simulacionTest,simulaciondao.read(700));
		assertEquals("Ley test", simulaciondao.read(700).getTituloLey());
		assertEquals("Simulacion1", simulaciondao.read(700).getTipoSimulacion());
		simulaciondao.delete(simulacionTest);
		
	}

	@Test
	void testUpdate() {
		SimulacionDAO simulaciondao = SimulacionDAOImplementation.getInstancia();
		
		Simulacion simulacionTest = new Simulacion();
	
		
		simulacionTest.setIdSimulacion(2);
		simulacionTest.setTituloLey("Ley test");
		simulacionTest.setTipoSimulacion("Simulacion1");
		
		simulaciondao.create(simulacionTest);
		
		
		simulacionTest.setTituloLey("Ley test2");
		simulacionTest.setTipoSimulacion("Simulacion2");
		
		simulaciondao.update(simulacionTest);
		
		assertNotEquals(simulacionTest,simulaciondao.read(33));
		assertNotEquals("Ley test", simulaciondao.read(2).getTituloLey());
		assertNotEquals("Simulacion1", simulaciondao.read(2).getTipoSimulacion());
		
		assertEquals(simulacionTest,simulaciondao.read(2));
		assertEquals("Ley test2", simulaciondao.read(2).getTituloLey());
		assertEquals("Simulacion2", simulaciondao.read(2).getTipoSimulacion());
		simulaciondao.delete(simulacionTest);
	}

	@Test
	void testDelete() {
		SimulacionDAO simulaciondao = SimulacionDAOImplementation.getInstancia();
		
		Simulacion simulacionTest = new Simulacion();
		simulacionTest.setIdSimulacion(1);
		simulaciondao.create(simulacionTest);
		simulaciondao.delete(simulacionTest);
		assertNull(simulaciondao.read(1));
	}

	@Test
	void testReadAll() {
		SimulacionDAO simulaciondao = SimulacionDAOImplementation.getInstancia();
		Simulacion simulacion1 = new Simulacion();
		Simulacion simulacion2 = new Simulacion();
		Simulacion simulacion3 = new Simulacion();
		
		
		simulacion1.setIdSimulacion(1);
		simulacion2.setIdSimulacion(2);
		simulacion3.setIdSimulacion(3);
		
		simulaciondao.create(simulacion1);
		simulaciondao.create(simulacion2);
		simulaciondao.create(simulacion3);
		List<Simulacion> simulacionesDAOList = (List<Simulacion>) simulaciondao.readAll();

		assertTrue(simulacionesDAOList.contains(simulacion1));
		assertTrue(simulacionesDAOList.contains(simulacion2));
		assertTrue(simulacionesDAOList.contains(simulacion3));
		
		simulaciondao.delete(simulacion3);
		simulacionesDAOList.clear();
		simulacionesDAOList = (List<Simulacion>) simulaciondao.readAll();
		assertFalse(simulacionesDAOList.contains(simulacion3));

		simulaciondao.delete(simulacion1);
		simulaciondao.delete(simulacion2);
		simulaciondao.delete(simulacion3);
	}

}