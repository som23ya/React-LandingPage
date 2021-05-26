import React from 'react';
import FeatureBox from './FeatureBox';
import featureimage from '../images/feature_1.png';
import featureimage1 from '../images/feature_2.png';
import featureimage2 from '../images/feature_3.png';

function Feature() {
    return (
        <div id='features'>
            <h1><span>Features</span></h1>
            <div className='a-container'> <FeatureBox image={featureimage} para='Open listing platform designed specifically for individuals from lower income households, made extremely easy-to-use with no login or authnetication needed.'/>
                <FeatureBox image={featureimage1} para='Job seekers can filter and seek jobs according to their preferred choices- either by site (on-site, remote, in office) or by type (full time, contract, part time, one time sevice).'/>
                <FeatureBox image={featureimage2} para='A Live customer service chat focused on successful communication between businesses and their appliers is provided so anyone can ask for more details regarding the jobs.'/>
          </div>
        </div>
    )
}

export default Feature;
