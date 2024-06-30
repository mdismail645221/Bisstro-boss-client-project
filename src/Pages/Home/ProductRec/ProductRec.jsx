import React from 'react';
import SectionTitle from '../../../Components/SectionTitle';

const ProductRec = () => {
    return (
        <section id='product-recomainded-wrapper'>
            <div className="container">
                <div className="product-recomainded-row">
                    <SectionTitle heading={"CHEF RECOMMENDS"} subHeading={"---Should Try---"} />
                    <div className="product-reco-card-wrapper">
                        
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductRec;