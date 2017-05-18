package br.gov.pa.prodepa.exampleapp.business;

import javax.ejb.Stateless;

import br.gov.pa.prodepa.business.AbstractBusinessCrud;
import br.gov.pa.prodepa.exampleapp.business.entity.Pessoa;
import br.gov.pa.prodepa.exampleapp.integration.persistence.PessoaDao;

@Stateless
public class PessoaBusinessBean extends AbstractBusinessCrud<Pessoa, PessoaDao> implements PessoaBusiness{

	private static final long serialVersionUID = 5904760153311246684L;

}
