import test from 'ava';

import * as spec from "@graph-data-structure/specification" ;

import {Graph, DiGraph} from '../../src';

spec.graph( test, "Adjacency Matrix Graph" , Graph ) ;
spec.digraph( test, "Adjacency Matrix DiGraph" , DiGraph ) ;
