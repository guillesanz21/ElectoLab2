<div class="btn-group btn-group-toggle" data-toggle="buttons" style="align: center">
  <label class="btn btn-secondary active">
    <input type="radio" name="options" id="mayoria1" autocomplete="off"> Mayoría Absoluta
  </label>
  <label class="btn btn-secondary">
    <input type="radio" name="options" id="mayoria2" autocomplete="off"> Mayoría Simple
  </label>
  <label class="btn btn-secondary">
    <input type="radio" name="options" id="mayoria3" autocomplete="off"> Mayoría Condicionada
  </label>
</div>

<input type="hidden" name="SimulationFavor" id="SimulationFavor" value="${simulacion.votos_favor}" />
<input type="hidden" name="SimulationContra" id="SimulationContra" value="${simulacion.votos_contra}" />
<input type="hidden" name="SimulationAbstencion" id="SimulationAbstencion" value="${simulacion.votos_abstencion}" />
<input type="hidden" name="SimulationAusentes" id="SimulationAusentes" value="${simulacion.votos_ausente}" />

<div id="SimulationLeyAprobada">
<!-- ESTA VISTA SE GENERA EN EL JS-->
</div>

