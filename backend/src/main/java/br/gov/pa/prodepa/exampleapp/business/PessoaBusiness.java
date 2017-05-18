package br.gov.pa.prodepa.exampleapp.business;

import javax.ejb.Local;

import br.gov.pa.prodepa.business.BusinessCrud;
import br.gov.pa.prodepa.exampleapp.business.entity.Pessoa;

@Local
public interface PessoaBusiness extends BusinessCrud<Pessoa>{

}
