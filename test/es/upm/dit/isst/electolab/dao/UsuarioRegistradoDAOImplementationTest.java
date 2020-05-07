package es.upm.dit.isst.electolab.dao;

import static org.junit.jupiter.api.Assertions.*;

import java.util.List;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;

import es.upm.dit.isst.electolab.model.UsuarioRegistrado;

class UsuarioRegistradoDAOImplementationTest {

	@BeforeAll
	static void setUpBeforeClass() throws Exception {
	}

	@AfterAll
	static void tearDownAfterClass() throws Exception {
	}

	@Test
	void testCreate() {
		UsuarioRegistradoDAO usuarioregistradodao = UsuarioRegistradoDAOImplementation.getInstancia();
		UsuarioRegistrado user1 = new UsuarioRegistrado();
		
		user1.setNombre("Pepe");
		user1.setEmail("Pepemail");
		user1.setPassword("pepepassword");
		
		usuarioregistradodao.create(user1);
		
		assertEquals(user1 , usuarioregistradodao.read("Pepemail"));
		assertEquals("Pepemail",usuarioregistradodao.read("Pepemail").getEmail());
		assertEquals("Pepe",usuarioregistradodao.read("Pepemail").getNombre());
		assertEquals("pepepassword",usuarioregistradodao.read("Pepemail").getPassword());
		
		usuarioregistradodao.delete(user1);
	}

	@Test
	void testRead() {
		UsuarioRegistradoDAO usuarioregistradodao = UsuarioRegistradoDAOImplementation.getInstancia();
		UsuarioRegistrado user1 = new UsuarioRegistrado();
		
		user1.setNombre("Pepe");
		user1.setEmail("Pepemail");
		user1.setPassword("pepepassword");
		
		usuarioregistradodao.create(user1);
		assertEquals(user1, usuarioregistradodao.read(user1.getEmail()));
		
		usuarioregistradodao.delete(user1);

	
	}

	@Test
	void testUpdate() {
		UsuarioRegistradoDAO usuarioregistradodao = UsuarioRegistradoDAOImplementation.getInstancia();
		UsuarioRegistrado user1 = new UsuarioRegistrado();
		
		user1.setNombre("Pepe");
		user1.setEmail("Pepemail");
		user1.setPassword("pepepassword");
		
		usuarioregistradodao.create(user1);
		
		user1.setNombre("Pepito");
		user1.setPassword("pepitopassword94");
		
		usuarioregistradodao.update(user1);
		
		assertNotEquals(user1 , usuarioregistradodao.read("Pepitomail"));
		assertNotEquals("Pepitomail",usuarioregistradodao.read("Pepemail").getEmail());
		assertNotEquals("Pepe",usuarioregistradodao.read("Pepemail").getNombre());
		assertNotEquals("pepepassword",usuarioregistradodao.read("Pepemail").getPassword());
	
		assertEquals(user1 , usuarioregistradodao.read("Pepemail"));
		assertEquals("Pepemail",usuarioregistradodao.read("Pepemail").getEmail());
		assertEquals("Pepito",usuarioregistradodao.read("Pepemail").getNombre());
		assertEquals("pepitopassword94",usuarioregistradodao.read("Pepemail").getPassword());
		usuarioregistradodao.delete(user1);
	}

	@Test
	void testDelete() {
		UsuarioRegistradoDAO usuarioregistradodao = UsuarioRegistradoDAOImplementation.getInstancia();
		UsuarioRegistrado user1 = new UsuarioRegistrado();
		
		user1.setNombre("Pepe");
		user1.setEmail("Pepemail");
		user1.setPassword("pepepassword");
		
		usuarioregistradodao.delete(user1);
	}

	@Test
	void testReadAll() {
		UsuarioRegistradoDAO usuarioregistradodao = UsuarioRegistradoDAOImplementation.getInstancia();
		
		UsuarioRegistrado user1 = new UsuarioRegistrado();
		user1.setNombre("Pepe");
		user1.setEmail("Pepemail");
		user1.setPassword("pepepassword");
		usuarioregistradodao.create(user1);

		UsuarioRegistrado user2 = new UsuarioRegistrado();
		user2.setNombre("Jose");
		user2.setEmail("Josemail");
		user2.setPassword("josepassword");
		usuarioregistradodao.create(user2);

		UsuarioRegistrado user3 = new UsuarioRegistrado();
		user3.setNombre("Jaime");
		user3.setEmail("Jaimemail");
		user3.setPassword("jaimepassword");
		usuarioregistradodao.create(user3);
		
		List<UsuarioRegistrado> usuariosDAOList = (List<UsuarioRegistrado>) usuarioregistradodao.readAll();
		assertTrue(usuariosDAOList.contains(user1));
		assertTrue(usuariosDAOList.contains(user2));
		assertTrue(usuariosDAOList.contains(user3));
		
		usuarioregistradodao.delete(user3);
		usuariosDAOList.clear();
		usuariosDAOList = (List<UsuarioRegistrado>) usuarioregistradodao.readAll();
		assertFalse(usuariosDAOList.contains(user3));

		usuarioregistradodao.delete(user1);
		usuarioregistradodao.delete(user2);

	}

	@Test
	void testLogin() {
		UsuarioRegistradoDAO usuarioregistradodao = UsuarioRegistradoDAOImplementation.getInstancia();
		UsuarioRegistrado user1 = new UsuarioRegistrado();
		
		user1.setNombre("Pepe");
		user1.setEmail("Pepemail");
		user1.setPassword("pepepassword");
		
		usuarioregistradodao.create(user1);
		
		
		UsuarioRegistrado user2 = usuarioregistradodao.login("Pepemail", "pepepassword");
		assertEquals(user2.getEmail(), "Pepemail");
		UsuarioRegistrado user3 = usuarioregistradodao.login("Pepito", "");
		assertNull(user3);
		
		usuarioregistradodao.delete(user1);
		
		
	}

}