import Footer from '@/app/component/common/Footer'
import Header from '@/app/component/common/Header'
import React from 'react'

function RefundPolicy() {
    return (
        <>
            <Header />
            <section className="bg-gray-50 py-12  ">
                <div className="container mx-auto py-4 px-4 ">
                    {/* <!-- Title --> */}
                    <h1 className="text-3xl font-bold text-center text-indigo-800 mb-6">Refund Policy</h1>

                    {/* <!-- Refund Policy Box --> */}
                    <div className="bg-white shadow-md rounded-lg p-6 max-w-4xl mx-auto ">
                        <div className="border-l-4 border-indigo-800 pl-4">
                            <p className="text-gray-700 text-lg">
                                "Payment for this business course is non-refundable and non-transferable. By enrolling, you acknowledge that all fees are fully earned and non-refundable, regardless of completion or attendance."
                            </p>
                        </div>
                    </div>
                </div>
                <Footer/>
            </section>
        </>

    )
}

export default RefundPolicy