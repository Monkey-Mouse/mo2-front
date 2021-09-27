<template>
  <v-card
    :to="'/project/' + project.ID"
    class="mx-auto"
    :width="this.$vuetify.breakpoint.smAndDown ? '65vw' : '50vw'"
    outlined
    :flat="flat"
  >
    <v-list-item three-line>
      <v-list-item-avatar tile :size="size" color="grey">{{
        initials
      }}</v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title class="text-h5 mb-1">
          {{ project.Name }}
        </v-list-item-title>
        <v-list-item-subtitle>{{ project.Description }}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </v-card>
</template>

<script lang="ts">
import { Project, User } from "@/models";
import { GetInitials, UserRole } from "../utils/index";
import Vue from "vue";
import Component from "vue-class-component";
import { Prop, Watch } from "vue-property-decorator";
@Component({
  components: {},
})
export default class ProjectItem extends Vue {
  @Prop()
  project: Project;
  @Prop()
  color: string;
  @Prop({default:false})
  flat:boolean;

  @Prop({default:80})
  size:number;
  get initials(): string {
    try {
      return GetInitials(this.project.Name);
    } catch (error) {
      return "A";
    }
  }
}
</script>
<style lang="scss" scoped>
// .theme--light.v-list-item:not(.v-list-item--active):not(.v-list-item--disabled) {
//   color: inherit !important;
// }
</style>