<script setup lang="ts">
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-vue-ui-kit'
</script>

<template>
  <MDBFooter :text="['center', 'lg-start', 'muted']">
    <section class="pt-1">
      <MDBContainer class="text-center text-md-start mt-5">
        <MDBRow class="mt-3">
          <MDBCol md="3" lg="4" xl="3" class="mx-auto mb-4">
            <h6 class="text-uppercase fw-bold mb-4"><i class="fas fa-gem me-3"></i>Store name</h6>
            <p>
              Here you can use rows and columns to organize your footer content. Lorem ipsum dolor
              sit amet, consectetur adipisicing elit.
            </p>
          </MDBCol>
          <MDBCol md="2" lg="2" xl="2" class="mx-auto mb-4">
            <h6 class="text-uppercase fw-bold mb-4">Products</h6>
            <p>
              <a href="#!" class="text-reset">Angular</a>
            </p>
            <p>
              <a href="#!" class="text-reset">React</a>
            </p>
            <p>
              <a href="#!" class="text-reset">Vue</a>
            </p>
            <p>
              <a href="#!" class="text-reset">Laravel</a>
            </p>
          </MDBCol>
          <MDBCol md="3" lg="2" xl="2" class="mx-auto mb-4">
            <h6 class="text-uppercase fw-bold mb-4">Useful links</h6>
            <p>
              <a href="#!" class="text-reset">Pricing</a>
            </p>
            <p>
              <a href="#!" class="text-reset">Settings</a>
            </p>
            <p>
              <a href="#!" class="text-reset">Orders</a>
            </p>
            <p>
              <a href="#!" class="text-reset">Help</a>
            </p>
          </MDBCol>
          <MDBCol md="4" lg="3" xl="3" class="mx-auto mb-md-0 mb-4">
            <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
            <p><i class="fas fa-home me-3"></i> New York, NY 10012, US</p>
            <p>
              <i class="fas fa-envelope me-3"></i>
              info@example.com
            </p>
            <p><MDBIcon icon="phone" class="me-3" /> + 01 234 567 88</p>
            <p><MDBIcon icon="print" class="me-3" /> + 01 234 567 89</p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
    <div class="text-center p-4" style="background-color: rgba(0, 0, 0, 0.05)">
      © 2024 Copyright
    </div>
  </MDBFooter>
</template>
