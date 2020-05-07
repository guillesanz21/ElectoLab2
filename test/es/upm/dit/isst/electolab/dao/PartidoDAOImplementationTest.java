package es.upm.dit.isst.electolab.dao;

import static org.junit.Assert.assertNull;
import static org.junit.jupiter.api.Assertions.*;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;

import es.upm.dit.isst.electolab.model.Diputado;
import es.upm.dit.isst.electolab.model.Partido;

class PartidoDAOImplementationTest {

	@BeforeAll
	static void setUpBeforeClass() throws Exception {
	}

	@AfterAll
	static void tearDownAfterClass() throws Exception {
	}

	@Test
	void testCreate() {
		PartidoDAO partidodao = PartidoDAOImplementation.getInstancia();

		Partido partidoTest1 = new Partido();
		Partido partidoTest2 = new Partido();

		
		partidoTest1.setCodeName("NP");
		partidoTest2.setCodeName("NP2");
		partidoTest1.setVote("a favor");
		partidoTest2.setVote("en contra");

		
		partidodao.create(partidoTest1);
		partidodao.create(partidoTest2);
		
		//El codeName se asigna correctamente
		assertEquals(partidodao.read("NP").getCodeName(),"NP");
		assertNotEquals(partidodao.read("NP2").getCodeName(), "PSOE");
		
		//El voto se asigna bien
		assertEquals("a favor", partidodao.read("NP").getVote());
		
		
		//No encuentra un partido que no existe 
		assertNull(partidodao.read("PPSOE"));
		
		
		partidodao.delete(partidodao.read("NP"));
		partidodao.delete(partidodao.read("NP2"));

		
	}
	
	@Test
	void testRead() {
		PartidoDAO partidodao = PartidoDAOImplementation.getInstancia();
		
		Partido nuevo = new Partido();
		nuevo.setCodeName("NP");
		nuevo.setFullName("NuevoPartido");
		
		
		partidodao.create(nuevo);
		

		assertEquals("NuevoPartido",partidodao.read("NP").getFullName());
		
		assertNull(partidodao.read("hola"));
		assertNotNull(partidodao.read("PSOE"));
		
		partidodao.delete(partidodao.read("NP"));
		
	}

	@Test
	void testUpdate() {
		PartidoDAO partidodao = PartidoDAOImplementation.getInstancia();
		
		Partido nuevo = new Partido();
		nuevo.setCodeName("NP");
		nuevo.setFullName("NuevoPartido");
		partidodao.create(nuevo);
		nuevo.setCodeName("NUEVO");
		partidodao.update(nuevo);
		assertEquals("NUEVO",partidodao.read("NUEVO").getCodeName());
		
		nuevo.setAusentes(10);
		nuevo.setSeats(13);
		nuevo.setFullName("NuevoPartido2");
		partidodao.update(nuevo);
		assertEquals("NuevoPartido2",partidodao.read("NUEVO").getFullName());
		assertEquals(13,partidodao.read("NUEVO").getSeats());
		assertEquals(10,partidodao.read("NUEVO").getAusentes());
		partidodao.delete(partidodao.read("NP"));
		partidodao.delete(partidodao.read("NUEVO"));

		
	}

	@Test
	void testDelete() {
		PartidoDAO partidodao = PartidoDAOImplementation.getInstancia();
		
		Partido nuevo = new Partido();
		nuevo.setCodeName("NP");
		partidodao.create(nuevo);
		partidodao.delete(nuevo);
	}

	@Test
	void testReadAll() {
		PartidoDAO partidodao = PartidoDAOImplementation.getInstancia();
		List<Partido> partidos = new ArrayList();
		List<Partido> partidosDAO;
		partidosDAO = partidodao.readAll();
		String[] codeNameList = {"PSOE","PP","VOX","UP","ERC","CS","JxCAT-JUNTS","PNV","BILDU","MASPAIS","CUP","PNC","NA","BNG","PRC","TE"};
		for(int i=0; i < codeNameList.length; i++) {
			System.out.println(codeNameList[i]);
			partidos.add(partidodao.read(codeNameList[i]));
			
		}

		for(int i=0; i < partidosDAO.size(); i++) {
			assertEquals(partidos.get(i).getCodeName(), partidosDAO.get(i).getCodeName());
			assertEquals(partidos.get(i).getAusentes(), partidosDAO.get(i).getAusentes());
			assertEquals(partidos.get(i).getFullName(), partidosDAO.get(i).getFullName());
			assertEquals(partidos.get(i).getSeats(), partidosDAO.get(i).getSeats());
			assertEquals(partidos.get(i).getVote(), partidosDAO.get(i).getVote());
		}

	}

}